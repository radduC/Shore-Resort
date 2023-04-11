package com.beachresort.services;

import com.beachresort.dto.RoomDTO;
import com.beachresort.models.Room;
import com.beachresort.repositories.RoomRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RoomService {
    private final RoomRepository roomRepository;

    public RoomService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    public List<Room> getAllRooms() {
        var rooms = roomRepository.findAllRooms();
        List<Room> roomList = new ArrayList<>();

        for (RoomDTO roomDTO : rooms) {
            Room room = updateRoomDetails(roomDTO);
            roomList.add(room);
        }

        return roomList;
    }

    private static Room updateRoomDetails(RoomDTO roomDTO) {
        Room room = new Room();

        var details = roomDTO.getDetails().split(";");
        var extras = roomDTO.getExtras().split(";");

        room.setFeatured(roomDTO.isFeatured());
        room.setBackground(roomDTO.getBackground());
        room.setType(roomDTO.getType());
        room.setPrice(roomDTO.getPrice());
        room.setImgUrl(roomDTO.getImgUrl());
        room.setSize(roomDTO.getRoom_size());
        room.setMax_capacity(roomDTO.getMax_capacity());
        room.setPetsAllowed(roomDTO.isPetsAllowed());
        room.setFreeBreakfast(roomDTO.isFreeBreakfast());
        room.setDesc(roomDTO.getRoom_desc());
        room.setRoomUrl(roomDTO.getRoom_url());
        room.setDetails(details);
        room.setExtras(extras);

        return room;
    }
}
