package com.beachresort.models;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

public class Room {

    @Getter
    @Setter
    private boolean featured;

    @Getter
    @Setter
    private String background;

    @Getter
    @Setter
    private String type;

    @Getter
    @Setter
    private int price;

    @Getter
    @Setter
    private String imgUrl;

    @Getter
    @Setter
    private String size;

    @Getter
    @Setter
    private String max_capacity;

    @Getter
    @Setter
    private boolean petsAllowed;

    @Getter
    @Setter
    private boolean freeBreakfast;

    @Getter
    @Setter
    private String desc;

    @Getter
    @Setter
    private String roomUrl;

    @Getter
    @Setter
    private String[] details;

    @Getter
    @Setter
    private String[] extras;
}
