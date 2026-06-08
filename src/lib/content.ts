// Typed access to the JSON data that drives programmatic pages.
import examsData from "@/data/exams.json";
import servicesData from "@/data/services.json";
import citiesData from "@/data/cities.json";
import errorsData from "@/data/errors.json";
import scholarshipsData from "@/data/scholarships.json";
import type { Locale } from "./i18n";

export type Localized = Record<Locale, string>;

export interface Exam {
  slug: string;
  name: Localized;
  fullName: Localized;
  otrFee: { general: number; sc_st: number };
  lastDate: string;
  services: string[];
  keywords: string[];
}

export interface Service {
  slug: string;
  name: Localized;
  purpose: Localized;
  keywords: string[];
}

export interface City {
  slug: string;
  name: Localized;
  keywords: string[];
}

export interface SsoError {
  slug: string;
  title: Localized;
  problem: Localized;
  fixes: Record<Locale, string[]>;
  keywords: string[];
}

export interface Scholarship {
  slug: string;
  name: Localized;
  eligibility: Localized;
  keywords: string[];
}

export const exams = examsData as Exam[];
export const services = servicesData as Service[];
export const cities = citiesData as City[];
export const errors = errorsData as SsoError[];
export const scholarships = scholarshipsData as Scholarship[];

export const getExam = (slug: string) => exams.find((e) => e.slug === slug);
export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
export const getCity = (slug: string) => cities.find((c) => c.slug === slug);
export const getError = (slug: string) => errors.find((e) => e.slug === slug);
export const getScholarship = (slug: string) =>
  scholarships.find((s) => s.slug === slug);
