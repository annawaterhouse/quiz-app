import { Link } from "react-router-dom";

export default function Learn() {
  const data = {
    javascript: [
      {
        id: 1,
        category: "Javascript",
        q: "What is Javascript?",
        a: "Javascript is a programming language",
      },
      {
        id: 2,
        category: "Javascript",
        q: "What is Javascript?",
        a: "Javascript is a programming language",
      },
      {
        id: 3,
        q: "What is Javascript?",
        a: "Javascript is a programming language",
      },
    ],
    react: [
      {
        id: 1,
        category: "React",
        q: "What is React?",
        a: "React is a programming language",
      },
      {
        id: 2,
        category: "React",
        q: "What is React?",
        a: "React is a programming language",
      },
      {
        id: 3,
        q: "What is React?",
        a: "React is a programming language",
      },
    ],
  };

  console.log(data);
  return (
    <section>
    <h1>Learn</h1>
      {/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Javascript</TableCell>
            <TableCell align="right">Question</TableCell>
            <TableCell align="right">Answer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.javascript.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right" variant="h2">{row.q}</TableCell>
              <TableCell align="right">{row.a}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}
    </section>
  );
}
