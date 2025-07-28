// components/layout/header.tsx
"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Courses', href: '/courses' },
    { name: 'Question Bank', href: '/question-bank' },
    { name: 'Article', href: '/article' },
    { name: 'Reports', href: '/reports' },
]

export function Header() {
    const pathname = usePathname()

    return (
        <header className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">T</span>
                            </div>
                            <span className="text-xl font-semibold text-gray-900">Tafurilm</span>
                        </Link>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-gray-600 hover:text-gray-900 transition-colors",
                                    pathname.startsWith(item.href) && "text-gray-900 font-medium"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <span className="text-sm text-gray-700">Welcome, Hafiz</span>
                        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}