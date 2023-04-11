package com.beachresort.repositories;

import com.beachresort.dto.RoomDTO;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends CrudRepository<RoomDTO, Integer> {
    @Query("SELECT r.featured, r.background, r.type, r.price, r.img_url, r.room_size, r.max_capacity, r.pets_allowed, r.free_breakfast, r.room_desc, r.room_url, " +
            "CONCAT(d.details1, ';', d.details2,  ';', d.details3) AS details, " +
            "CONCAT(e.pillows_bed_linens, ';', e.towels, ';', e.toiletries, ';', e.refreshments, ';', e.internet, ';', e.beds) AS extras FROM rooms r " +
            "INNER JOIN details d ON r.details_id = d.details_id INNER JOIN extras e ON r.extras_id = e.extras_id")
    Iterable<RoomDTO> findAllRooms();
}
