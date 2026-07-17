import { Search, X } from "lucide-react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2"
        size={18}
      />

      <input
        type="text"
        placeholder="Search engineering problems..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border py-3 pl-10 pr-10"
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2"
          aria-label="Clear search"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}

export default SearchBar;