import Text from "./text";

export default function NoContent() {
  return (
    <div className="flex flex-col h-full">
      <Text className="text-sm text-gray-400">아직 글이 없어요</Text>
    </div>
  );
}
