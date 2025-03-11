"use client";

import { ReactNode } from "react";
import { BackButton } from "@/components/ui/back-button";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  backHref?: string;
  backLabel?: string;
  showBackButton?: boolean;
  actions?: ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  description,
  backHref = "/dashboard",
  backLabel = "Back",
  showBackButton = true,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("mb-6 flex flex-col gap-1", className)}>
      <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          {showBackButton && (
            <BackButton href={backHref} label={backLabel} />
          )}
          <div>
            <h1 className="text-xl font-semibold sm:text-2xl">{title}</h1>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
        </div>
        {actions && (
          <div className="mt-2 flex items-center gap-2 sm:mt-0">{actions}</div>
        )}
      </div>
    </div>
  );
}

export function SectionHeader({
  title,
  description,
  action
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-lg font-semibold sm:text-xl">{title}</h2>
        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      {action && (
        <div className="mt-2 sm:mt-0">
          {action}
        </div>
      )}
    </div>
  );
} 