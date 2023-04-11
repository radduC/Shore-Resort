package com.beachresort.controllers;


import com.beachresort.models.Room;
import com.beachresort.services.RoomService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RoomController {
    private final RoomService roomService;

    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @GetMapping("/view-rooms")
    public List<Room> getAllRooms() {
        return roomService.getAllRooms();
    }
}
