"use client"

import * as React from "react";
import { useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
    DropdownMenuGroup
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button"
import { Home, Settings, LayoutDashboard } from "lucide-react";
import { useRouter } from 'next/navigation';
import { Gothic_A1 } from "next/font/google";

export function AvatarDropdown() {
    const { push } = useRouter();
    const router = useRouter();

    const GoToHome = () => (event: any) => {
        return (event: React.MouseEvent) => {
            router.push("/");
            event.preventDefault();
        };
    };
    const GoToSettings = () => {
        return (event: React.MouseEvent) => {
            router.push("/account/settings/");
            event.preventDefault();
        };
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={GoToHome()}>
                        <Home className="mr-2 h-4 w-4"></Home> <span>Home</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={GoToSettings()}>
                        <Settings className="mr-2 h-4 w-4"></Settings> <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <LayoutDashboard className="mr-2 h-4 w-4"></LayoutDashboard> <span>Dashboard</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator></DropdownMenuSeparator>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Hi
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}