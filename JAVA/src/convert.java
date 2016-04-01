
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
		List<String[]> resolvedData = parser.parseAll(new FileReader("/Users/rayliu/Desktop/actor.csv"));

		System.out.println(resolvedData.get(10)[3]);
		String eol = System.getProperty("line.separator");
		String content = resolvedData.get(10)[3];
		String query=actor(resolvedData);
		String path = "/Users/rayliu/Desktop/actor.sql";
		try{
		Files.write( Paths.get(path), query.getBytes(), StandardOpenOption.CREATE);}
		catch (IOException e){
			System.out.println("IO ERROR");
		}
	}
	
	//help method
	public static String actor(List<String[]> a){
		String eol = System.getProperty("line.separator");
		String query="";
		for(int i=1;i<a.size();i++){
		 query=query+eol+"INSERT INTO movie(actor_id,last_name,first_name,date_of_birth) VALUES(\'"+a.get(i)[0]+"\',\'"+a.get(i)[1]+"\',\'"+a.get(i)[2]+"\',\'Convert(DateTime,\'"+a.get(i)[3]+"\',126)\');";
			
		}
		return query;
	}
	
	
	
	public static String movie(String[] a ,String trailer){
		
		/*
		 * INSERT INTO Customer(CustId,Name,Address,Amount) 
VALUES (1,'John','Ottawa',8.5),
(2,'Amy','Orleans',9.0),
(3,'Peter','Gatineau',6.3);
		 */
		String query="INSERT INTO movie(movie_id,name,date_released,language,subtitles,country,trailer) VALUES(\'"+a[0]+"\',\'"+a[1]+"\',\'"+a[2]+"\',\'"+a[3]+"\',\'"+a[4]+"\',\'"+a[5]+"\',\'"+a[6]+"\')";
		
		
		return query;
	}
}