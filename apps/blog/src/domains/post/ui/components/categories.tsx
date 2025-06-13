interface Props {
  categories: string[];
}

export default function Categories({ categories }: Props) {
  return (
    <div className="mb-2 flex gap-2">
      {categories.map((category) => (
        <Category key={category} category={category} />
      ))}
    </div>
  );
}

const Category = ({ category }: { category: string }) => {
  return <span className="text-main text-xs">{category}</span>;
};
