package com.julia.locationtracker;

import net.vz.mongodb.jackson.JacksonDBCollection;
import net.vz.mongodb.jackson.WriteResult;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/")
public class UserResource {

    private JacksonDBCollection<User, String> getJacksonDBCollection() {
        return JacksonDBCollection.wrap(Server.mongoDB.getCollection(User.class.getSimpleName().toLowerCase()), User.class, String.class);
    }

    @Path("user")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public User addBar(User user) {
        WriteResult<User, String> result = getJacksonDBCollection().insert(user);
//        System.out.println(user.name);
//        System.out.println(user.lat);
//        System.out.println(user.lon);
        return result.getSavedObject();
    }
    
    @Path("users")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<User> listBars() {
        return getJacksonDBCollection().find().toArray();
    }

}
