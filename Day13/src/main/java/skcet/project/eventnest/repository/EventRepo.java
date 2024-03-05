package skcet.project.eventnest.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.micrometer.observation.Observation.Event;
import skcet.project.eventnest.model.Events;


@Repository
public interface EventRepo extends JpaRepository<Events,Integer>{

    void save(Event existingEvent);

}
