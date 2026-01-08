import { Text } from '@zoelog/ui';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex w-full justify-end px-4 py-8">
      <Text className="text-gray-500 text-xs">
        © Powered by{' '}
        <Link
          href="https://github.com/hijjoy"
          className="hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hyewon
        </Link>
      </Text>
    </footer>
  );
}
