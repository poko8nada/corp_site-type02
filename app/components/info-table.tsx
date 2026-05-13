/** daisyUI table wrapper. For pricing tables, spec sheets, comparison. */
export interface InfoTableProps {
  headers: readonly string[];
  rows: readonly (readonly string[])[];
  caption?: string;
  revealOnScroll?: boolean;
}

const revealDelayByIndex = [
  '[--reveal-delay:0ms]',
  '[--reveal-delay:60ms]',
  '[--reveal-delay:120ms]',
  '[--reveal-delay:180ms]',
  '[--reveal-delay:240ms]',
  '[--reveal-delay:300ms]',
] as const;

export function InfoTable(props: InfoTableProps) {
  const { headers, rows, caption, revealOnScroll } = props;

  return (
    <div>
      <div class='mt-10 overflow-x-auto sm:mt-12'>
        <table class='table w-full'>
          {caption && <caption class='sr-only'>{caption}</caption>}
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                class={
                  revealOnScroll
                    ? `reveal-on-scroll ${revealDelayByIndex[Math.min(rowIndex, revealDelayByIndex.length - 1)]}`
                    : ''
                }
                key={row.join('')}
              >
                {row.map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
