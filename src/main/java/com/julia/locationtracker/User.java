package com.julia.locationtracker;

import javax.persistence.Id;

public class User {

    @Id
    public String id;
    
    public String name;
    
    public String lat;
    
    public String lon;
    
    public String date;
    
}
