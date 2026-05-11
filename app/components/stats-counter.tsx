/** daisyUI stats wrapper. Numeric values with labels displayed in a horizontal row. */
export interface StatsCounterItem {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

export interface StatsCounterProps {
  items: readonly StatsCounterItem[];
  columns?: 2 | 3 | 4;
}

export function StatsCounter(props: StatsCounterProps) {
  const { items, columns = 4 } = props;
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  } as const;

  return (
    <div class={`stats stats-vertical grid ${gridCols[columns]} shadow-sm`}>
      {items.map((item) => (
        <div class='stat' key={item.label}>
          {item.prefix || item.suffix ? (
            <div class='stat-value'>
              {item.prefix && <span class='text-base-content/50 text-lg'>{item.prefix}</span>}
              {item.value}
              {item.suffix && <span class='text-base-content/50 text-lg'>{item.suffix}</span>}
            </div>
          ) : (
            <div class='stat-value'>{item.value}</div>
          )}
          <div class='stat-desc'>{item.label}</div>
        </div>
      ))}
    </div>
  );
}
