import { type TableData } from "../content";

type ComparisonTableProps = {
  table: TableData;
};

export default function ComparisonTable({ table }: ComparisonTableProps) {
  return (
    <section className="table-card" aria-label={table.caption}>
      <div className="table-head">
        <p className="eyebrow">Quick table</p>
        <h2>{table.caption}</h2>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              {table.columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.join("-")}>
                {row.map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {table.note ? <p className="table-note">{table.note}</p> : null}
    </section>
  );
}

