"use client";

import { useCombobox } from "downshift";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface Destination {
  city: string;
  state: string;
}
function getCitiesFilter(inputValue: string) {
  return function citiesFilter(destination: Destination) {
    return (
      !inputValue ||
      destination.city.toLowerCase().includes(inputValue.toLowerCase())
    );
  };
}

export default function CitiesAutocomplete({ cities }: any) {
  const [items, setItems] = useState([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  const rowVirtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => listRef.current,
    estimateSize: () => 68,
  });
  const router = useRouter();
  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    defaultHighlightedIndex: 0,
    onInputValueChange({ inputValue }) {
      if (!inputValue) {
        setItems([]);
      } else {
        setItems(cities.filter(getCitiesFilter(inputValue)));
      }
    },
    onSelectedItemChange({ selectedItem }) {
      if (!selectedItem) return;
      const item = selectedItem as Destination;
      router.push(`${item.city}-${item.state}`);
    },
    items,
    itemToString(item) {
      if (!item) return "";
      const i = item as Destination;
      return `${i.city}, ${i.state}`;
    },
  });

  return (
    <div>
      <div className="flex flex-col gap-1">
        <label
          {...getLabelProps()}
          id="cities-autocomplete-label"
          htmlFor="cities-autocomplete-input"
          className="sr-only"
        >
          Pra qual cidade é o guincho:
        </label>
        <div className="flex shadow-sm bg-white gap-0.5 rounded-lg">
          <input
            {...getInputProps({ ref: inputRef })}
            id="cities-autocomplete-input"
            placeholder="Pra qual cidade?"
            className="w-full p-1.5 text-2xl rounded-lg"
            aria-controls="cities-suggestions-list"
            aria-labelledby="cities-autocomplete-label"
          />
        </div>
      </div>
      <ul
        {...getMenuProps({ ref: listRef })}
        id="cities-suggestions-list"
        aria-labelledby="cities-autocomplete-label"
        className="relative bg-white shadow-md max-h-80 overflow-auto rounded-lg divide-y divide-slate-200 mt-1"
      >
        {isOpen && (
          <>
            <li
              key="total-size"
              style={{
                height: rowVirtualizer.getTotalSize(),
                position: "relative",
                width: "100%",
              }}
            />
            {rowVirtualizer.getVirtualItems().map((virtualItem) => (
              <li
                className={`
                ${highlightedIndex === virtualItem.index && "bg-slate-300 "} 
                py-2 px-3 shadow-sm flex flex-col
              `}
                key={virtualItem.key}
                {...getItemProps({
                  index: virtualItem.index,
                  item: items[virtualItem.index],
                })}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  transform: `translateY(${virtualItem.start}px)`,
                }}
              >
                <span className="text-lg">
                  {(items[virtualItem.index] as Destination).city}
                </span>
                <span className="text-gray-700">
                  {(items[virtualItem.index] as Destination).state}
                </span>
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
}
