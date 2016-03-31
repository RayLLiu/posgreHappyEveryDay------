
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
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
		List<String[]> resolvedData = parser.parseAll(new FileReader("/Users/rayliu/Desktop/movie.csv"));

		System.out.println(resolvedData.get(0)[0]);
		String eol = System.getProperty("line.separator");
		String content = "Hello File!";
		String path = "/Users/rayliu/Desktop/movie.txt";
		try{
		Files.write( Paths.get(path), content.getBytes(), StandardOpenOption.CREATE);}
		catch (IOException e){
			System.out.println("IO ERROR");
		}
	}
}