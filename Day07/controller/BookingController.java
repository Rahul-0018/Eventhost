package skcet.project.eventnest.controller;

import java.util.List;
import java.util.Optional;

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
import skcet.project.eventnest.dto.request.AddBookingRequest;
import skcet.project.eventnest.dto.request.AddEventRequest;
import skcet.project.eventnest.dto.request.DeleteBookingRequest;
import skcet.project.eventnest.dto.request.DeleteEventRequest;
import skcet.project.eventnest.dto.request.UpdateBookingRequest;
import skcet.project.eventnest.dto.request.UpdateEventRequest;
import skcet.project.eventnest.dto.response.AddBookingResponse;
import skcet.project.eventnest.dto.response.AddEventResponse;
import skcet.project.eventnest.dto.response.BasicResponse;
import skcet.project.eventnest.dto.response.BookingResponse;
import skcet.project.eventnest.dto.response.DeleteBookingResponse;
import skcet.project.eventnest.dto.response.DeleteEventResponse;
import skcet.project.eventnest.dto.response.EventResponse;
import skcet.project.eventnest.dto.response.OptionalResponse;
import skcet.project.eventnest.dto.response.UpdateBookingResponse;
import skcet.project.eventnest.dto.response.UpdateEventResponse;
import skcet.project.eventnest.model.Booking;
import skcet.project.eventnest.service.BookingService;
import skcet.project.eventnest.service.EventService;
import skcet.project.eventnest.service.impl.BookingServiceImpl;

@Tag(name = "Booking Management", description = "Book a events")
@RestController
@RequiredArgsConstructor
public class BookingController {

    private final BookingService service;

    @PostMapping("/addBooking")
    public ResponseEntity<AddBookingResponse> addEvents(@RequestBody AddBookingRequest request) {
        AddBookingResponse response = new AddBookingResponse();
        try {
            response = service.addBooking(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (Exception e) {
            response.setMessage("Event could not be Booked");
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }

    // @Tag(name = "Delete Bookings")
    @DeleteMapping("/deleteBooking/{id}")
    public ResponseEntity<DeleteBookingResponse> deleteBooking(@PathVariable int id) {
        DeleteBookingResponse response = new DeleteBookingResponse();
        var request = DeleteBookingRequest.builder().id(id).build();
        try {
            response = service.deleteBooking(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (Exception e) {
            response.setMessage("Booking could not be deleted");
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping("/showBooking")
    public ResponseEntity<BasicResponse<BookingResponse>> getAllEvents() {
        BasicResponse<BookingResponse> response = new BasicResponse<>();
        try {
            response = service.showBooking();
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }

    // @GetMapping("/showBookingById/{id}")
    // public ResponseEntity<OptionalResponse<BookingResponse>> getById(
    // @PathVariable int id ) {
    // OptionalResponse<BookingResponse> response = new OptionalResponse()<>();
    // try {
    // response = service.showBookingById( id );
    // return new ResponseEntity<>(response, OK);
    // } catch (Exception e) {
    // response.setMessage("Something went wrong!");
    // return new ResponseEntity<>(response, EXPECTATION_FAILED);
    // }
    // }

    @PutMapping("/updateBooking")
    public ResponseEntity<UpdateBookingResponse> updateEvent(@RequestBody UpdateBookingRequest request) {
        UpdateBookingResponse response = new UpdateBookingResponse();
        try {
            response = service.updateBooking(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (Exception e) {
            response.setMessage("Booking could not be updated");
            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
        }
    }

    // @GetMapping("/showBookingById/{id}")
    // public Optional<Booking> showBookingById(@PathVariable int id){
    // return service.showBookingByid(id);
    // }

}
