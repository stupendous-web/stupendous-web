export default function List({ items, singleColumn = false }) {
  return (
    <ul className={`uk-list${!singleColumn ? " uk-column-1-2@s" : ""}`}>
      {items?.map((item) => (
        <li key={item}>
          <i className="ri-check-fill uk-margin-right" />
          {item}
        </li>
      ))}
    </ul>
  );
}
