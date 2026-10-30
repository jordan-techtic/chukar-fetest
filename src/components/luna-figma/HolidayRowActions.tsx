"use client";

import { CategoryRowActions } from "./CategoryRowActions";

export function HolidayRowActions(props: {
  holidayId: string;
  onEdit: (id: string, opener?: HTMLElement) => void;
  onDelete: (id: string) => void;
  className?: string;
}) {
  return (
    <CategoryRowActions
      categoryId={props.holidayId}
      onEdit={props.onEdit}
      onDelete={props.onDelete}
      className={props.className}
    />
  );
}
