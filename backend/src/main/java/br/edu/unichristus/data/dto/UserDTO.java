package br.edu.unichristus.data.dto;

import lombok.Data;

@Data
public class UserDTO {

    private Long id;
    private String name;
    private String email;
    private String login;
    private String password;

}