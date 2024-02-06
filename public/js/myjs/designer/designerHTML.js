export var designerListFullHTML = `<div class="row wrapper border-bottom white-bg page-heading">
  <div class="col-lg-10">
    <h2>디자이너 정보관리</h2>
    <ol class="breadcrumb">
      <li>
        <a href="#">홈 -</a>
      </li>
      <li>
        <a>디자이너-</a>
      </li>
      <li class="active">
        <strong>목록</strong>
      </li>
    </ol>
  </div>
  <div class="col-lg-2"></div>
</div>


<div class="wrapper wrapper-content">
  <form>
    <div class="ibox-content m-b-sm border-bottom">
      <div class="row">
        <div class="col-sm-4">
          <div class="form-group">
            <label class="control-label" for="OrderNo">디자이너 이름</label>
            <input type="text" class="form-control" name="designer_name" id="designer_name" />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="control-label" for="OrderName">직책</label>
            <input type="text" class="form-control" name="designer_position" id="designer_position" />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="control-label" for="MobileNo">사용여부</label>
            <input type="text" class="form-control" name="used_yn_code" id="used_yn_code" />
          </div>
        </div>
      </div>
      <div class="text-center">
        <input type="button" class="btn btn-primary" value="조회">
        <a href="#" type="button" class="btn btn-info">신규</a>
      </div>
    </div>
  </form>
  <div class="row">
    <div class="col-lg-12">
      <div class="ibox float-e-margins">
        <div class="ibox-content">
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th width="5%">#</th>
                  <th width="15%">직책</th>
                  <th width="20%">이름</th>
                  <th width="20%">소개</th>
                  <th width="20%">재직상태</th>
                  <th width="20%">등록일시</th>
 
                </tr>
              </thead>
              <tbody class="hoverTblBody">             
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;

export var designerAddFullHTML = `
<!--우측 콘텐츠 헤더영역 -->
<div class="row wrapper border-bottom white-bg page-heading">
  <div class="col-lg-10">
    <h2>디자이너 추가</h2>
    <ol class="breadcrumb">
      <li>
        <a href="/main">홈 - </a>
      </li>
      <li>
        <a>디자이너 - </a>
      </li>
      <li class="active">
        <strong>추가</strong>
      </li>
    </ol>
  </div>
  <div class="col-lg-2"></div>
</div>

<!--우측 콘텐츠 영역 -->
<form action="/admin/create" method="post">
  <div class="wrapper wrapper-content">
    <div class="ibox-content m-b-sm border-bottom">
      <div class="row">
        
        <div class="col-sm-6">
          <div class="form-group">
            <label class="control-label">이름</label>
            <input
              type="text"
              class="form-control"
              name="intputAddDesignerName"
              id="intputAddDesignerName"
            />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label class="control-label">직책</label>
            <input
              type="text"
              class="form-control"
              name="inputAddPosition"
              id="inputAddPosition"
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label class="control-label">간략 소개</label>
            <input
              type="text"
              class="form-control"
              name="inputAddDesignerDesc"
              id="inputAddDesignerDesc"
            />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label class="control-label">Email</label>
            <input type="text" class="form-control" name="inputAddEmail" id="inputAddEmail" />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label class="control-label">전화번호</label>
            <input
              type="text"
              class="form-control"
              name="inputAddTelephone"
              id="inputAddTelephone"
            />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label class="control-label">사용여부</label>
            <input
              type="text"
              class="form-control"
              name="intpuAddUsedYnCode"
              id="intpuAddUsedYnCode"
            />
          </div>
        </div>
      </div>


      <div class="text-center">
        <button type="button" onclick="funcButtonAddSave()" class="btn btn-primary" id="buttonAddSave" name="buttonAddSave">
          저장
        </button>
        <a href="#" type="button" class="btn btn-info" id="buttonAddList" name="buttonAddList">목록</a>
      </div>
    </div>
  </div>
</form>`;

export var designerEditFullHTML = `<div class="row wrapper border-bottom white-bg page-heading">
  <div class="col-lg-10">
    <h2>디자이너 수정</h2>
    <ol class="breadcrumb">
      <li>
        <a href="#">홈 - </a>
      </li>
      <li>
        <a>디자이너 - </a>
      </li>
      <li class="active">
        <strong>수정</strong>
      </li>
    </ol>
  </div>
  <div class="col-lg-2"></div>
</div>

<!--우측 콘텐츠 영역 -->
<div class="wrapper wrapper-content">
  <form
    class="ibox-content m-b-sm border-bottom"
  >
    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <label class="control-label">고유번호</label>
          <input
            type="text"
            class="form-control"
            value="testID_1"
            name="designer_id"
            id="designer_id"
            disabled
          />
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label class="control-label">이름</label>
          <input
            type="text"
            class="form-control"
            value="Test_name"
            name="designer_name"
            id="designer_name"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <label class="control-label">직책</label>
          <input
            type="text"
            class="form-control"
            value="Test_직책"
            name="position"
            id="position"
          />
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label class="control-label">재직상태</label>
          <input
            type="text"
            class="form-control"
            value="TEST_재직상태"
            name="designer_state_code"
            id="designer_state_code"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <label class="control-label">email</label>
          <input
            type="text"
            class="form-control"
            value="TEST_EMAIL"
            name="email"
            id="email"
          />
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label class="control-label">전화번호</label>
          <input
            type="text"
            class="form-control"
            value="TEST_전화번호"
            name="telephone"
            id="telephone"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <label class="control-label">등록일시</label>
          <input
            type="text"
            class="form-control"
            value="2021-03-11"
            disabled
            name="reg_date"
            id="reg_date"
          />
        </div>
      </div>
      

      
    <div class="col-sm-6">
      <div class="form-group">
        <label class="control-label">수정일시</label>
        <input
          type="date"
          class="form-control"
          value="1990-03-11"
          name="edit_date"
          id="edit_date"
          disabled
        />
      </div>
    </div>
    </div>


    <div class="text-center">
      <button
      type="button"
        class="btn btn-primary"
        name="action"
        id="button-save"
      >
        저장
      </button>
      <button  
      type="button"
      class="btn btn-danger" name="action" value="delete" id="button-delete">
        삭제
      </button>
      <a href="#" class="btn btn-info" type="button">목록</a>
    </div>
  </form>
</div>`;
