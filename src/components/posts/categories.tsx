interface Props {
  categories: string[];
}

export default function Categories({ categories }: Props) {
  return (
    <div className="flex gap-2 mb-2">
      {categories.map((category) => (
        <Category key={category} category={category} />
      ))}
    </div>
  );
}

const Category = ({ category }: { category: string }) => {
  return <span className="text-xs text-main">{category}</span>;
};
