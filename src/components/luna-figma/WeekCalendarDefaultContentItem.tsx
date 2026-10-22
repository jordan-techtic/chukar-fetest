export function WeekCalendarDefaultContentItem({
  nodeId,
  labelNodeId,
  label,
  labelClassName,
  rounded = false,
}: {
  nodeId: string;
  labelNodeId: string;
  label: string;
  labelClassName: string;
  rounded?: boolean;
}) {
  return (
    <div
      data-figma-node={nodeId}
      className={
        rounded
          ? "box-border flex-1 min-w-0 h-auto rounded-[0px_10px_0px_0px] relative flex flex-row items-center justify-center pt-[10px] pr-[10px] pb-[10px] pl-[10px]"
          : "box-border flex-1 min-w-0 h-auto relative flex flex-row items-center justify-center pt-[10px] pr-[10px] pb-[10px] pl-[10px] border-r border-[#e5e7eb]"
      }
    >
      <p data-figma-node={labelNodeId} className={labelClassName}>
        {label}
      </p>
    </div>
  );
}
