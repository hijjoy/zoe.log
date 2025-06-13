import Link from 'next/link';
import Text from '@/shared/components/text';

export default function Footer() {
  return (
    <footer className="flex w-full justify-end px-4 py-8">
      <Text className="text-xs text-gray-500">
        © Powered by{' '}
        <Link href="https://github.com/hijjoy" className="hover:text-gray-600" target="_blank" rel="noopener noreferrer">
          Hyewon
        </Link>
      </Text>
    </footer>
  );
}
