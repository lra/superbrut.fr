interface SalaryRow {
  amount: string
  label: string
  operator: '+' | '−' | '='
}

interface SalaryBreakdownProps {
  caption: string
  rows: readonly SalaryRow[]
}

export function SalaryBreakdown(props: SalaryBreakdownProps) {
  return (
    <div className="salary-breakdown">
      <table>
        <caption>{props.caption}</caption>
        <tbody>
          {props.rows.map((row) => (
            <tr className={row.operator === '=' ? 'salary-total' : undefined} key={row.label}>
              <td aria-hidden="true" className="salary-operator">
                {row.operator}
              </td>
              <th scope="row">{row.label}</th>
              <td className="salary-amount">{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
