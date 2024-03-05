package skcet.project.eventnest.controller;

import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import skcet.project.eventnest.dto.request.AddEventRequest;
import skcet.project.eventnest.dto.request.DeleteEventRequest;
import skcet.project.eventnest.dto.request.UpdateEventRequest;
import skcet.project.eventnest.dto.response.AddEventResponse;
import skcet.project.eventnest.dto.response.BasicResponse;
import skcet.project.eventnest.dto.response.DeleteEventResponse;
import skcet.project.eventnest.dto.response.EventResponse;
import skcet.project.eventnest.dto.response.UpdateEventResponse;
import skcet.project.eventnest.service.EventService;
import skcet.project.eventnest.service.impl.EventServicesImpl;

@RestController
@Tag(name = "Events Management", description = "Events endpoints")
@RequiredArgsConstructor
public class EventController {
    @Autowired
    EventServicesImpl service;

    private final EventService event;

    @PostMapping("/addEvents")
    public ResponseEntity<AddEventResponse> addEvents(@RequestBody AddEventRequest request) {
        AddEventResponse response = new AddEventResponse();
        try {
            response = event.addEvent(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (Exception e) {
            response.setMessage("Event could not be added");
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PutMapping("/updateEvents")
    public ResponseEntity<UpdateEventResponse> updateEvent(@RequestBody UpdateEventRequest request) {
        UpdateEventResponse response = new UpdateEventResponse();
        try {
            response = event.updateEvent(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (Exception e) {
            response.setMessage("Event could not be updated");
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }

    @DeleteMapping("/deleteEvents/{id}")
    public ResponseEntity<DeleteEventResponse> deleteEvent(@PathVariable int id) {
        DeleteEventResponse response = new DeleteEventResponse();
        var request = DeleteEventRequest.builder().id(id).build();
        try {
            response = event.deleteEvent(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (Exception e) {
            response.setMessage("Event could not be deleted");
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping("/showEvents")
    public ResponseEntity<BasicResponse<EventResponse>> getAllEvents() {
        BasicResponse<EventResponse> response = new BasicResponse<>();
        try {
            response = event.allEvents();
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }
}
