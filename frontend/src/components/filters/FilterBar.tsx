import SearchBar from "@/components/filters/SearchBar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

type FilterBarProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;

  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  categories: string[];

  sortBy: string;
  onSortChange: (value: string) => void;

  onReset: () => void;
};

function FilterBar({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
  sortBy,
  onSortChange,
  onReset,
}: FilterBarProps) {
  return (
    <div className="grid gap-4 md:grid-cols-[2fr_auto_auto_auto]">
      <SearchBar
        value={searchQuery}
        onChange={onSearchChange}
      />

      <Select
        value={selectedCategory}
        onValueChange={(value) => onCategoryChange(value ?? "All")}
      >
        <SelectTrigger className="
        h-12!
        w-full
        rounded-2xl
        border-slate-700
        bg-slate-900/60
        backdrop-blur-sm
        transition-all
        duration-300
        hover:border-slate-600
        focus:border-blue-500/50
        focus:ring-4
        focus:ring-blue-500/10
        md:w-56
        ">
          <SelectValue placeholder="Category" />
        </SelectTrigger>

        <SelectContent
          className="
            p-1
            rounded-2xl
            border
            border-slate-700
            bg-slate-900/95
            backdrop-blur-xl
            text-slate-100
            shadow-2xl
            shadow-black/40
          "
        >
          {categories.map((category) => (
            <SelectItem
              value={category}
              key={category}
              className="
                rounded-lg
                text-slate-200
                focus:bg-blue-500/10
                focus:text-blue-300
                data-highlighted:bg-blue-500/10
                data-highlighted:text-blue-300
              "
            >
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={sortBy}
        onValueChange={(value) => onSortChange(value ?? "default")}
      >
        <SelectTrigger className="
        h-12!
        w-full
        rounded-2xl
        border-slate-700
        bg-slate-900/60
        backdrop-blur-sm
        transition-all
        duration-300
        hover:border-slate-600
        focus:border-blue-500/50
        focus:ring-4
        focus:ring-blue-500/10
        md:w-52
        ">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>

        <SelectContent
          className="
            p-1
            rounded-2xl
            border
            border-slate-700
            bg-slate-900/95
            backdrop-blur-xl
            text-slate-100
            shadow-2xl
            shadow-black/40
          "
        >
          <SelectItem
            value="default"
            className="
              rounded-lg
              text-slate-200
              focus:bg-blue-500/10
              focus:text-blue-300
              data-highlighted:bg-blue-500/10
              data-highlighted:text-blue-300
            "
          >Default</SelectItem>
          <SelectItem value="opportunity"
          className="
              rounded-lg
              text-slate-200
              focus:bg-blue-500/10
              focus:text-blue-300
              data-highlighted:bg-blue-500/10
              data-highlighted:text-blue-300
            ">
            Highest Opportunity
          </SelectItem>
          <SelectItem value="severity"
          className="
              rounded-lg
              text-slate-200
              focus:bg-blue-500/10
              focus:text-blue-300
              data-highlighted:bg-blue-500/10
              data-highlighted:text-blue-300
            ">
            Highest Severity
          </SelectItem>
          <SelectItem value="difficulty"
          className="
              rounded-lg
              text-slate-200
              focus:bg-blue-500/10
              focus:text-blue-300
              data-highlighted:bg-blue-500/10
              data-highlighted:text-blue-300
            ">
            Highest Difficulty
          </SelectItem>
        </SelectContent>
      </Select>

      <Button
        type="button"
        variant="outline"
        onClick={onReset}
        className="
          h-12!
          rounded-2xl
          border-slate-700
          bg-slate-900/60
          px-5
          backdrop-blur-sm
          transition-all
          duration-300
          hover:border-red-500/30
          hover:bg-red-500/10
          hover:text-red-300
        "
      >
        Reset
      </Button>
    </div>
  );
}

export default FilterBar;