interface Props {
  categories: string[];
}

export default function Categories({ categories }: Props) {
  return (
    <div className="flex gap-2 mb-2">
      {categories.map((category) => (
        <span key={category} className="text-xs text-main">
          {category}
        </span>
      ))}
    </div>
  );
}
