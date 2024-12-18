// components
"use client";
import CoursesCategories from "@/app/courses-categories";
import Events from "@/app/events";
import ExploreCourses from "@/app/explore-courses";
import Hero from "@/app/hero";
import OutImpressiveStats from "@/app/out-impressive-stats";
import StudentsFeedback from "@/app/students-feedback";
import TESTIMONIAL from "@/app/testimonial";
import TrustedCompany from "@/app/trusted-companies";
import { Navbar, Footer, CourseCard } from "@/components";
import CertificateCard from "@/components/certificate-card";

// sections

export default function Campaign() {
  return (
    <>
      <Navbar />
      {/* <Hero />
      <OutImpressiveStats />
      <CoursesCategories />
      <ExploreCourses />
      <TESTIMONIAL />
      <Events />
      <StudentsFeedback /> */}

      <CertificateCard
        studentName="Rohan Sondekar"
        courseName="Full Stack Web Development Internship"
        completionDate="December 03, 2024"
        certificateId="CERT-128-3522-3481"
        img="/image/certificate-template.jpg"
        issueDate="December 03, 2024"
      />
      <TrustedCompany />
      <Footer />
    </>
  );
}
