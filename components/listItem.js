import React from "react";

export default function ListItem() {
  const ListItem = ({ item }) => (
    <div className="p-3 border-b border-gray-200">{item}</div>
  );

  const ScrollableList = ({ items }) => (
    <div className="h-64 overflow-y-scroll">
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </div>
  );

  const PopUp = ({ items }) => (
    <div className="fixed top-0 left-0 bottom-0 right-0 bg-white p-4">
      <div className="bg-gray-200 p-4 rounded-lg">
        <ScrollableList items={items} />
      </div>
    </div>
  );

  return <div>ListItem</div>;
}
