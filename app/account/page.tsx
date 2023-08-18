import Image from 'next/image'
import { ModeToggle } from '@/components/modeToggle'
import { Button } from '@/components/ui/button';
import { AvatarDropdown } from '@/components/avatarDropdown';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Image src="/android-chrome-512x512.png" width={40} height={40} alt="Useful Bot Logo" className="fixed left-0 top-0 flex w-full justify-center border-b lg:static lg:w-auto"></Image>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <ModeToggle />
          &nbsp;
          <AvatarDropdown />
        </div>
      </div>
      <h1>Account</h1>
    </main>
  )
}