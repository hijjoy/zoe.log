interface Props {
  categories: string[];
}

export default function Categories({ categories }: Props) {
  return (
    <ul className="mb-2 flex gap-2">
      {categories.map((category) => (
        <Category key={category} category={category} />
      ))}
    </ul>
  );
}

const Category = ({ category }: { category: string }) => {
  return <li className="text-main text-xs">{category}</li>;
};
