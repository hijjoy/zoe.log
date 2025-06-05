import NoContent from "../common/no-content";
import Text from "../common/text";

export default function RecentPostList() {
  return (
    <div className="flex flex-col gap-1">
      <Text className="text-2xl font-semibold">Recent Posts</Text>
      <NoContent />
    </div>
  );
}
