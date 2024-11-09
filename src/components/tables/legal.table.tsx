import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Table as TableType } from "@/app/legal/type";

export default function LegalTable({ table }: { table: TableType }) {
	return (
		<Table className="text-left">
			<TableHeader>
				<TableRow>
					{table.headers.map((header, headerIndex) => (
						<TableHead key={headerIndex}>{header}</TableHead>
					))}
				</TableRow>
			</TableHeader>
			<TableBody>
				{table.rows.map((row, rowIndex) => (
					<TableRow key={rowIndex}>
						{row.map((cell, cellIndex) => (
							<TableCell key={cellIndex}>{cell}</TableCell>
						))}
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
