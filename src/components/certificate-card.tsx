"use client";
import React from "react";
import Image from "next/image";
import {
  Typography,
  Card,
  CardBody,
  CardHeader,
  Button,
} from "@material-tailwind/react";

interface CertificateCardProps {
  studentName: string;
  courseName: string;
  completionDate?: string;
  certificateId: string;
  img?: string;
  issueDate?: string;
}

export function CertificateCard({
  studentName,
  courseName,
  completionDate,
  certificateId,
  img,
  issueDate,
}: CertificateCardProps) {
  return (
    <Card className="border rounded-lg shadow-md">
      {/* Card Header with Certificate Image */}
      {img && (
        <CardHeader className="h-72 overflow-hidden rounded-t-lg">
          <Image
            width={768}
            height={768}
            src={img}
            alt={`${courseName} certificate preview`}
            className="h-full w-full object-cover"
          />
        </CardHeader>
      )}

      {/* Card Body with Certificate Details */}
      <CardBody>
        <div className="space-y-6">
          {/* Certificate ID */}
          <div>
            <Typography
              variant="small"
              color="blue"
              className="mb-1 font-medium text-gray-500"
            >
              Certificate ID
            </Typography>
            <Typography variant="h6" color="blue-gray">
              {certificateId}
            </Typography>
          </div>

          {/* Student and Course Information */}
          <div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-1 capitalize font-semibold"
            >
              {studentName}
            </Typography>
            <Typography className="font-normal text-gray-500">
              {courseName}
            </Typography>
          </div>

          {/* Dates Section */}
          {(completionDate || issueDate) && (
            <div className="flex justify-between gap-6">
              {completionDate && (
                <div>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-500"
                  >
                    Completion Date
                  </Typography>
                  <Typography variant="small" color="blue-gray">
                    {completionDate}
                  </Typography>
                </div>
              )}
              {issueDate && (
                <div>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-500"
                  >
                    Issue Date
                  </Typography>
                  <Typography variant="small" color="blue-gray">
                    {issueDate}
                  </Typography>
                </div>
              )}
            </div>
          )}

          {/* Download Button */}
          {/* Uncomment when implementing download functionality */}
          {/* <Button variant="outlined" fullWidth>
            Download Certificate
          </Button> */}
        </div>
      </CardBody>
    </Card>
  );
}

export default CertificateCard;
