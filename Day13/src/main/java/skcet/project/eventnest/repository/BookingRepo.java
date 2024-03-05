package skcet.project.eventnest.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import skcet.project.eventnest.model.Booking;


@Repository
public interface BookingRepo extends JpaRepository<Booking,Integer>{

}

