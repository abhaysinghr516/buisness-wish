"use client";
import { usePathname } from "next/navigation";
import {
  Error404Docs,
  AccordionDocs,
  AlertDocs,
  AvatarDocs,
  BadgeDocs,
  BannerDocs,
  BentoDocs,
  BlogListDocs,
  BottomNavigationDocs,
  BreadcrumbsDocs,
  ButtonDocs,
  CtaDocs,
  CardDocs,
  DividerDocs,
  DropdownDocs,
  FeaturesDocs,
  FooterDocs,
  HeroDocs,
  HeaderDocs,
  LoaderDocs,
  PaginationDocs,
  SettingsDocs,
  SidebarDocs,
  SkeletonDocs,
  TabsDocs,
  TestimonialsDocs,
} from "../../../docs/index";

// src/components/ComponentPage.tsx
import { ComponentData, componentsData } from "../../../../data/componentsData";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";

type ComponentKey =
  | "Error404"
  | "Accordion"
  | "Alert"
  | "Avatar"
  | "Badge"
  | "Banner"
  | "Bento"
  | "BlogList"
  | "BottomNavigation"
  | "Breadcrumbs"
  | "Button"
  | "CTA"
  | "Card"
  | "Divider"
  | "Dropdown"
  | "Features"
  | "Footer"
  | "Hero"
  | "Header"
  | "Loader"
  | "Pagination"
  | "Settings"
  | "Sidebar"
  | "Skeleton"
  | "Tabs"
  | "Testimonials";

const components = {
  Error404: Error404Docs,
  Accordion: AccordionDocs,
  Alert: AlertDocs,
  Avatar: AvatarDocs,
  Badge: BadgeDocs,
  Banner: BannerDocs,
  Bento: BentoDocs,
  BlogList: BlogListDocs,
  BottomNavigation: BottomNavigationDocs,
  Breadcrumbs: BreadcrumbsDocs,
  Button: ButtonDocs,
  CTA: CtaDocs,
  Card: CardDocs,
  Divider: DividerDocs,
  Dropdown: DropdownDocs,
  Features: FeaturesDocs,
  Footer: FooterDocs,
  Hero: HeroDocs,
  Header: HeaderDocs,
  Loader: LoaderDocs,
  Pagination: PaginationDocs,
  Settings: SettingsDocs,
  Sidebar: SidebarDocs,
  Skeleton: SkeletonDocs,
  Tabs: TabsDocs,
  Testimonials: TestimonialsDocs,
};

export default function ComponentPage() {
  const pathname = usePathname();
  const componentData: ComponentData | undefined = componentsData.find(
    (data) => data.href === pathname
  );
  const Component = componentData
    ? components[componentData.title as ComponentKey]
    : null;

  return (
    <>
      <main className="mx-4 relative max-w-screen-2xl sm:mx-auto">
        <div className="fixed z-50 top-0 right-0 w-full bg-white lg:border-b">
          <Navbar />
        </div>
        <div className="lg:flex h-screen">
          <Sidebar />
          <div className="flex-1 overflow-auto lg:mt-16">
            <div className="flex justify-center mt-10 mb-20">
              {Component ? <Component /> : null}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
