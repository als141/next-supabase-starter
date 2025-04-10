'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  IoHome, 
  IoDocumentText, 
  IoAdd, 
  IoSettings, 
  IoHelp,
  IoStatsChart
} from 'react-icons/io5';

import { cn } from '@/utils/cn';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  const links = [
    {
      href: '/dashboard',
      label: 'ダッシュボード',
      icon: <IoHome size={20} />,
      active: pathname === '/dashboard',
    },
    {
      href: '/articles',
      label: '記事一覧',
      icon: <IoDocumentText size={20} />,
      active: pathname === '/articles' || pathname.startsWith('/articles/'),
    },
    {
      href: '/generate',
      label: '新規記事生成',
      icon: <IoAdd size={20} />,
      active: pathname === '/generate',
    },
    {
      href: '/analytics',
      label: '分析',
      icon: <IoStatsChart size={20} />,
      active: pathname === '/analytics',
    },
    {
      href: '/settings',
      label: '設定',
      icon: <IoSettings size={20} />,
      active: pathname === '/settings',
    },
    {
      href: '/help',
      label: 'ヘルプ・サポート',
      icon: <IoHelp size={20} />,
      active: pathname === '/help',
    },
  ];

  return (
    <div className={cn('h-full w-64 border-r border-zinc-800 bg-black p-4', className)}>
      <div className="mb-8 py-2">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-indigo-600">
            <span className="font-alt text-lg font-bold text-white">S</span>
          </div>
          <span className="font-alt text-xl font-semibold text-white">SEO記事くん</span>
        </Link>
      </div>

      <nav className="space-y-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'flex items-center gap-3 rounded-md px-3 py-2 transition-colors',
              link.active
                ? 'bg-indigo-600/20 text-indigo-400'
                : 'text-gray-400 hover:bg-zinc-900 hover:text-white'
            )}
          >
            <span className={link.active ? 'text-indigo-400' : 'text-gray-400'}>{link.icon}</span>
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto">
        <div className="mt-10 rounded-md border border-zinc-800 bg-zinc-900/50 p-4">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600/30">
              <span className="text-xs font-semibold text-indigo-400">5</span>
            </div>
            <span className="text-sm font-medium text-white">記事作成枠数</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
            <div className="h-full w-1/2 bg-indigo-600"></div>
          </div>
          <div className="mt-1 flex justify-between text-xs text-gray-400">
            <span>5/10記事</span>
            <span>プロプランに変更</span>
          </div>
        </div>
      </div>
    </div>
  );
}
