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
    <div className="grid gap-4 md:grid-cols-[1fr_auto_auto_auto]">
      <SearchBar
        value={searchQuery}
        onChange={onSearchChange}
      />

      <Select
        value={selectedCategory}
        onValueChange={(value) => onCategoryChange(value ?? "All")}
      >
        <SelectTrigger className="w-full md:w-56">
          <SelectValue placeholder="Category" />
        </SelectTrigger>

        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={sortBy}
        onValueChange={(value) => onSortChange(value ?? "default")}
      >
        <SelectTrigger className="w-full md:w-52">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="default">Default</SelectItem>
          <SelectItem value="opportunity">
            Highest Opportunity
          </SelectItem>
          <SelectItem value="severity">
            Highest Severity
          </SelectItem>
          <SelectItem value="difficulty">
            Highest Difficulty
          </SelectItem>
        </SelectContent>
      </Select>

      <Button
        type="button"
        variant="outline"
        onClick={onReset}
        >
        Reset
        </Button>
    </div>
  );
}

export default FilterBar;