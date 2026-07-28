import { Search, X } from "lucide-react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="group relative">
      <Search
        className="
          absolute
          left-4
          top-1/2
          h-5
          w-5
          -translate-y-1/2
          text-slate-500
          transition-colors
          duration-200
          group-focus-within:text-blue-400
        "
      />

      <input
        type="text"
        placeholder="Search problems, keywords, or categories..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          h-12
          w-full
          rounded-2xl
          border
          border-slate-700
          bg-slate-900/60
          py-3
          pl-12
          pr-12
          text-slate-100
          placeholder:text-slate-500
          backdrop-blur-sm
          transition-all
          duration-300
          outline-none
          focus:border-blue-500/50
          focus:ring-4
          focus:ring-blue-500/10
        "
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            rounded-full
            p-1
            text-slate-500
            transition-colors
            hover:bg-slate-800
            hover:text-slate-200
          "
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

export default SearchBar;