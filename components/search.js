import React, { useEffect, useState, useRef } from "react"
import Downshift from "downshift"

const API_KEY = "i-Pi7nD9cZkjCXAhIBWdtW92CkhEBGnUAs_HxL_5rng"
const ROOT_URL = "https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json"

function Search({ onChange, onClear }) {
  const [inputValue, setInputValue] = useState("")
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const cityInput = useRef(null)
  useEffect(() => {
    cityInput.current.focus()
  }, [])
  useEffect(() => {
    if (!query) {
      setResults([])
      return
    }
    async function fetchData() {
      const response = await fetch(
        `${ROOT_URL}?apiKey=${API_KEY}&country=BRA&resultType=city&query=${query}`
      )
      const data = await response.json()
      const results = data.suggestions.map(suggestion => ({
        city: suggestion.address.city,
        state: suggestion.address.state,
      }))
      setResults(results)
    }

    const cancelRequest = setTimeout(() => {
      fetchData()
    }, 500)
    return () => clearTimeout(cancelRequest)
  }, [query])

  return (
    <Downshift
      inputValue={inputValue}
      onChange={selection => {
        cityInput.current.blur()
        setInputValue(`${selection.city} - ${selection.state}`)
        onChange(`${selection.city} - ${selection.state}`)
      }}
      itemToString={item => (item ? `${item.city} - ${item.state}` : "")}
      defaultHighlightedIndex={0}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        getRootProps,
      }) => {
        function onChangeCity() {
          setInputValue("")
          cityInput.current.focus()
          onClear()
        }
        return (
          <div
            style={{
              width: "100%",
            }}
          >
            <div
              style={{ display: "inline-block", width: "100%" }}
              {...getRootProps({}, { suppressRefError: true })}
            >
              <input
                {...getInputProps({
                  style: {
                    fontSize: "1.5rem",
                    width: "100%",
                    padding: "10px 5px",
                    borderStyle: "solid",
                    borderColor: "#2f3931",
                  },
                  ref: cityInput,
                  placeholder: "Pra qual cidade?",
                  onChange: e => {
                    setInputValue(e.target.value)
                    setQuery(e.target.value)
                  },
                })}
              />
            </div>
            <div
              {...getMenuProps({
                style: isOpen
                  ? {
                      border: "1px solid black",
                      borderTop: "none",
                    }
                  : {},
              })}
            >
              {isOpen
                ? results.map((item, index) => (
                    <div
                      {...getItemProps({
                        key: item.city + item.state,
                        index,
                        item,
                        style: {
                          fontSize: "1.4rem",
                          padding: "10px 5px",
                          backgroundColor:
                            highlightedIndex === index
                              ? "gray"
                              : index % 2 !== 0
                              ? "white"
                              : "#eee",
                        },
                      })}
                    >
                      {item.city} - {item.state}
                    </div>
                  ))
                : null}
            </div>
            {isOpen || !inputValue ? null : (
              <span
                tabIndex="0"
                role="button"
                style={{
                  fontSize: "1.2rem",
                  textDecoration: "underline",
                  display: "inline-block",
                  padding: "10px 0",
                }}
                onClick={() => {
                  onChangeCity()
                }}
                onKeyDown={event => {
                  if (event.key === " " || event.key === "Enter") {
                    onChangeCity()
                  }
                }}
              >
                Mudar cidade
              </span>
            )}
          </div>
        )
      }}
    </Downshift>
  )
}

export default Search
