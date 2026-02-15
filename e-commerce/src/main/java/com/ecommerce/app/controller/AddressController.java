package com.ecommerce.app.controller;

import com.ecommerce.app.dto.request.AddressDTO;
import com.ecommerce.app.model.User;
import com.ecommerce.app.service.AddressService;
import com.ecommerce.app.util.AuthUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/addresses")
public class AddressController {

    @Autowired
    private AddressService addressService;
    @Autowired
    private AuthUtil authUtil;

    @PostMapping()
    public ResponseEntity<AddressDTO> createAddress(@RequestBody AddressDTO addressDTO) {

        User user = authUtil.loggedInUser();

        AddressDTO savedAddressDto = addressService.createAddress(addressDTO, user);

        return new ResponseEntity<>(savedAddressDto, HttpStatus.CREATED);
    }
}
