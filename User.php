<?php
session_start();
include('includes/header.php');
include('includes/sidebar.php');
include('includes/topbar.php');
include('config/connection.php');

?>
 <!-- Content Wrapper. Contains page content -->
 <div class="content-wrapper">

<!-- Modal -->
<div class="modal fade" id="AddUserModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Dashboard</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Registerd User</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
<!-- /.content-header -->
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
       

            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Registerd users
                    </h3>
                    <a href="" data-bs-toggle="modal" data-bs-target="AddUserModal" class="btn btn-primary btn-sm float-right">Add user</a>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example1" class="table table-bordered table-striped">
                  <thead>
                  <tr>
                    <th>Namae</th>
                    <th>Email</th>
                    <th>mobile no</th>
                    <th>City</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                <?php
                      $query = "SELECT *FROM usertable";
                      $query_run = mysqli_query($con, $query);
                      if(mysqli_num_rows($query_run) > 0)
                      {
                        foreach($query_run as $row)
                        {
                          ?>
                              <tr>
                            <td><?php echo $row['name'];?></td>
                            <td><?php echo $row['email'];?></td>
                            <td><?php echo $row['mobile'];?></td>
                            <td><?php echo $row['city'];?></td>
  
                            <td>
                              <a href = "User-edit.php?user_id=<?php echo $row['id'];?>" class="btn btn-info">Edit</a>
                              <a href = "" class="btn btn-danger">Delete</a>
                            </td>
                            </tr>
                          <?php
                      }
                    }
                      else
                      {
                        ?>
                        <tr>
                          <td>no data found</td>
                      </tr>
                          <?php
                      }
                ?>

                  
                  </tbody>

              </table>
            </div>
           </div>
            </div>
            </div>
        </div>


<?php
include('includes/footer.php');
?>