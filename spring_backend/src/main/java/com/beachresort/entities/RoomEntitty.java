package com.beachresort.entities;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

public class RoomEntitty {
    @Id
    @Getter
    @Setter
    private int roomId;

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
    private String room_size;

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
    private String room_desc;

    @Getter
    @Setter
    private String roomUrl;

    @Getter
    @Setter
    private Integer detailsId;

    @Getter
    @Setter
    private Integer extrasId;
}
