
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.List;

import com.univocity.parsers.csv.CsvParser;
import com.univocity.parsers.csv.CsvParserSettings;

public class convert {
	public static void main(String[] args) throws FileNotFoundException {

		/**
		 * --------------------------------------- Read CSV rows into
		 * 2-dimensional array ---------------------------------------
		 */

		// 1st, creates a CSV parser with the configs
		CsvParser parser = new CsvParser(new CsvParserSettings());

		// 2nd, parses all rows from the CSV file into a 2-dimensional array
		List<String[]> resolvedData = parser.parseAll(new FileReader("moviedb - movie.csv"));

		// 3rd, process the 2-dimensional array with business logic
		// ......
	}
}