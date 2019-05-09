package com.example.demo;

public class ManageUser {
	private Integer manageUserID;
	private String ManagerUserNickname;
	private String passWord;
	ManageUser(Integer managerUserID,String managerUserNickname,String passWord){
		this.manageUserID=managerUserID;
		this.ManagerUserNickname=managerUserNickname;
		this.passWord=passWord;
	}
	
	public Integer getmanageUserID() {
		return manageUserID;
	}
	
	public void setmanageUserID(Integer manageUserID) {
		this.manageUserID=manageUserID;
	}
	
	public String getManagerUserNickname() {
		return ManagerUserNickname;
	}
	
	public void setmanagerUserNickname(String managerUserNickname) {
		this.ManagerUserNickname=managerUserNickname;
	}
	
	public String getpassWord() {
		return passWord;
	}
	
	public void setpassWord(String passWord) {
		this.passWord=passWord;
	}
	
	
	@Override
    public String toString() {
        return "ManageUser{" +
                "manageUserID=" +manageUserID +
                ", managerUserNickname='" + ManagerUserNickname + '\'' +
                ", passWord=" + passWord +
                '}';
    }
	
}
