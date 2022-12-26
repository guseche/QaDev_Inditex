package com.inditex.certification.features;

import com.intuit.karate.*;
import com.intuit.karate.Runner;
import com.intuit.karate.junit4.*;
import net.masterthought.cucumber.*;
import org.apache.commons.io.FileUtils;
import org.junit.*;
import org.junit.runner.*;

import java.io.*;
import java.util.*;

public class ParallelTest {

    @Test
    public void testParallel(){
        Results results = Runner.parallel(getClass(),4);
        generateReport(results.getReportDir());
        Assert.assertTrue(results.getErrorMessages(),results.getFailCount() == 0);
    }

    public static void generateReport(String karateOutPath){
        Collection<File> jsonFiles = FileUtils.listFiles(new File(karateOutPath),new String[]{"json"},true);
        List<String> jsonPath = new ArrayList<>(jsonFiles.size());
        jsonFiles.forEach(file -> jsonPath.add(file.getAbsolutePath()));
        Configuration config = new Configuration(new File("target"),"Ejercicio 3: Tratamiento de datos en APIs");
        ReportBuilder reportBuilder = new ReportBuilder(jsonPath,config);
        reportBuilder.generateReports();
    }

}
