import{Aa as C,Da as d,Fa as he,Ha as X,L as h,M as N,N as ce,O as P,S as y,Ta as fe,Ua as V,X as x,Y as u,Z as E,_a as f,aa as _,i as le,n as ue,ra as F,t as de,ta as w,wa as a,zb as Y}from"./chunk-FFFHX7KO.js";import{a as c,b as m}from"./chunk-5FZOKLP6.js";var De=(()=>{let e=class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}};e.\u0275fac=function(r){return new(r||e)(a(w),a(F))},e.\u0275dir=u({type:e});let i=e;return i})(),W=(()=>{let e=class e extends De{};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=_(e)))(s||e)}})(),e.\u0275dir=u({type:e,features:[d]});let i=e;return i})(),M=new y("NgValueAccessor");var We={provide:M,useExisting:h(()=>be),multi:!0};function qe(){let i=Y()?Y().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var ze=new y("CompositionEventMode"),be=(()=>{let e=class e extends De{constructor(t,r,s){super(t,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!qe())}writeValue(t){let r=t??"";this.setProperty("value",r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}};e.\u0275fac=function(r){return new(r||e)(a(w),a(F),a(ze,8))},e.\u0275dir=u({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&V("input",function(l){return s._handleInput(l.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(l){return s._compositionEnd(l.target.value)})},features:[f([We]),d]});let i=e;return i})();function p(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function Ae(i){return i!=null&&typeof i.length=="number"}var q=new y("NgValidators"),te=new y("NgAsyncValidators"),Ze=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,pe=class{static min(e){return Me(e)}static max(e){return Xe(e)}static required(e){return Ye(e)}static requiredTrue(e){return Ke(e)}static email(e){return Je(e)}static minLength(e){return Qe(e)}static maxLength(e){return et(e)}static pattern(e){return tt(e)}static nullValidator(e){return j(e)}static compose(e){return Oe(e)}static composeAsync(e){return Pe(e)}};function Me(i){return e=>{if(p(e.value)||p(i))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<i?{min:{min:i,actual:e.value}}:null}}function Xe(i){return e=>{if(p(e.value)||p(i))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>i?{max:{max:i,actual:e.value}}:null}}function Ye(i){return p(i.value)?{required:!0}:null}function Ke(i){return i.value===!0?null:{required:!0}}function Je(i){return p(i.value)||Ze.test(i.value)?null:{email:!0}}function Qe(i){return e=>p(e.value)||!Ae(e.value)?null:e.value.length<i?{minlength:{requiredLength:i,actualLength:e.value.length}}:null}function et(i){return e=>Ae(e.value)&&e.value.length>i?{maxlength:{requiredLength:i,actualLength:e.value.length}}:null}function tt(i){if(!i)return j;let e,n;return typeof i=="string"?(n="",i.charAt(0)!=="^"&&(n+="^"),n+=i,i.charAt(i.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=i.toString(),e=i),t=>{if(p(t.value))return null;let r=t.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function j(i){return null}function Ee(i){return i!=null}function Fe(i){return fe(i)?le(i):i}function we(i){let e={};return i.forEach(n=>{e=n!=null?c(c({},e),n):e}),Object.keys(e).length===0?null:e}function Ie(i,e){return e.map(n=>n(i))}function it(i){return!i.validate}function Se(i){return i.map(e=>it(e)?e:n=>e.validate(n))}function Oe(i){if(!i)return null;let e=i.filter(Ee);return e.length==0?null:function(n){return we(Ie(n,e))}}function Ne(i){return i!=null?Oe(Se(i)):null}function Pe(i){if(!i)return null;let e=i.filter(Ee);return e.length==0?null:function(n){let t=Ie(n,e).map(Fe);return de(t).pipe(ue(we))}}function xe(i){return i!=null?Pe(Se(i)):null}function ge(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function ke(i){return i._rawValidators}function Ge(i){return i._rawAsyncValidators}function K(i){return i?Array.isArray(i)?i:[i]:[]}function T(i,e){return Array.isArray(i)?i.includes(e):i===e}function me(i,e){let n=K(e);return K(i).forEach(r=>{T(n,r)||n.push(r)}),n}function ye(i,e){return K(e).filter(n=>!T(i,n))}var B=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ne(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=xe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},b=class extends B{get formDirective(){return null}get path(){return null}},v=class extends B{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},U=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},nt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ii=m(c({},nt),{"[class.ng-submitted]":"isSubmitted"}),ni=(()=>{let e=class e extends U{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(a(v,2))},e.\u0275dir=u({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&X("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[d]});let i=e;return i})(),ri=(()=>{let e=class e extends U{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(a(b,10))},e.\u0275dir=u({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&X("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[d]});let i=e;return i})();var I="VALID",k="INVALID",D="PENDING",S="DISABLED";function ie(i){return(z(i)?i.validators:i)||null}function rt(i){return Array.isArray(i)?Ne(i):i||null}function ne(i,e){return(z(e)?e.asyncValidators:i)||null}function st(i){return Array.isArray(i)?xe(i):i||null}function z(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function je(i,e,n){let t=i.controls;if(!(e?Object.keys(t):t).length)throw new N(1e3,"");if(!t[n])throw new N(1001,"")}function Te(i,e,n){i._forEachChild((t,r)=>{if(n[r]===void 0)throw new N(1002,"")})}var A=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===I}get invalid(){return this.status===k}get pending(){return this.status==D}get disabled(){return this.status===S}get enabled(){return this.status!==S}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(me(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(me(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ye(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ye(e,this._rawAsyncValidators))}hasValidator(e){return T(this._rawValidators,e)}hasAsyncValidator(e){return T(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=D,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=S,this.errors=null,this._forEachChild(t=>{t.disable(m(c({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(m(c({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(t=>t(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=I,this._forEachChild(t=>{t.enable(m(c({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(m(c({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===I||this.status===D)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?S:I}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=D,this._hasOwnPendingAsyncValidator=!0;let n=Fe(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(t=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(t,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((t,r)=>t&&t._find(r),this)}getError(e,n){let t=n?this.get(n):this;return t&&t.errors?t.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new C,this.statusChanges=new C}_calculateStatus(){return this._allControlsDisabled()?S:this.errors?k:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(D)?D:this._anyControlsHaveStatus(k)?k:I}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){z(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=rt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=st(this._rawAsyncValidators)}},R=class extends A{constructor(e,n,t){super(ie(n),ne(t,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,t={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){Te(this,!0,e),Object.keys(e).forEach(t=>{je(this,!0,t),this.controls[t].setValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(t=>{let r=this.controls[t];r&&r.patchValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((t,r)=>{t.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,t)=>(e[t]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,t)=>t._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let t=this.controls[n];t&&e(t,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,t]of Object.entries(this.controls))if(this.contains(n)&&e(t))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,t,r)=>((t.enabled||this.disabled)&&(n[r]=t.value),n))}_reduceChildren(e,n){let t=e;return this._forEachChild((r,s)=>{t=n(t,r,s)}),t}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var J=class extends R{};var re=new y("CallSetDisabledState",{providedIn:"root",factory:()=>se}),se="always";function ot(i,e){return[...e.path,i]}function Q(i,e,n=se){oe(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),lt(i,e),dt(i,e),ut(i,e),at(i,e)}function H(i,e,n=!0){let t=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(t),e.valueAccessor.registerOnTouched(t)),$(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function L(i,e){i.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function at(i,e){if(e.valueAccessor.setDisabledState){let n=t=>{e.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(n),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(n)})}}function oe(i,e){let n=ke(i);e.validator!==null?i.setValidators(ge(n,e.validator)):typeof n=="function"&&i.setValidators([n]);let t=Ge(i);e.asyncValidator!==null?i.setAsyncValidators(ge(t,e.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let r=()=>i.updateValueAndValidity();L(e._rawValidators,r),L(e._rawAsyncValidators,r)}function $(i,e){let n=!1;if(i!==null){if(e.validator!==null){let r=ke(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.validator);s.length!==r.length&&(n=!0,i.setValidators(s))}}if(e.asyncValidator!==null){let r=Ge(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.asyncValidator);s.length!==r.length&&(n=!0,i.setAsyncValidators(s))}}}let t=()=>{};return L(e._rawValidators,t),L(e._rawAsyncValidators,t),n}function lt(i,e){e.valueAccessor.registerOnChange(n=>{i._pendingValue=n,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Be(i,e)})}function ut(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Be(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function Be(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function dt(i,e){let n=(t,r)=>{e.valueAccessor.writeValue(t),r&&e.viewToModelUpdate(t)};i.registerOnChange(n),e._registerOnDestroy(()=>{i._unregisterOnChange(n)})}function ct(i,e){i==null,oe(i,e)}function ht(i,e){return $(i,e)}function Ue(i,e){if(!i.hasOwnProperty("model"))return!1;let n=i.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function ft(i){return Object.getPrototypeOf(i.constructor)===W}function pt(i,e){i._syncPendingControls(),e.forEach(n=>{let t=n.control;t.updateOn==="submit"&&t._pendingChange&&(n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Re(i,e){if(!e)return null;Array.isArray(e);let n,t,r;return e.forEach(s=>{s.constructor===be?n=s:ft(s)?t=s:r=s}),r||t||n||null}function gt(i,e){let n=i.indexOf(e);n>-1&&i.splice(n,1)}function ve(i,e){let n=i.indexOf(e);n>-1&&i.splice(n,1)}function _e(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var G=class extends A{constructor(e=null,n,t){super(ie(n),ne(t,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),z(n)&&(n.nonNullable||n.initialValueIsDefault)&&(_e(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){ve(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){ve(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){_e(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var mt=i=>i instanceof G;var oi=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=u({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let i=e;return i})(),yt={provide:M,useExisting:h(()=>vt),multi:!0},vt=(()=>{let e=class e extends W{writeValue(t){let r=t??"";this.setProperty("value",r)}registerOnChange(t){this.onChange=r=>{t(r==""?null:parseFloat(r))}}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=_(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(r,s){r&1&&V("input",function(l){return s.onChange(l.target.value)})("blur",function(){return s.onTouched()})},features:[f([yt]),d]});let i=e;return i})();var _t=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=x({type:e}),e.\u0275inj=P({});let i=e;return i})();var ae=new y("NgModelWithFormControlWarning"),Ct={provide:v,useExisting:h(()=>Vt)},Vt=(()=>{let e=class e extends v{set isDisabled(t){}constructor(t,r,s,o,l){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=l,this.update=new C,this._ngModelWarningSent=!1,this._setValidators(t),this._setAsyncValidators(r),this.valueAccessor=Re(this,s)}ngOnChanges(t){if(this._isControlChanged(t)){let r=t.form.previousValue;r&&H(r,this,!1),Q(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}Ue(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&H(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_isControlChanged(t){return t.hasOwnProperty("form")}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(a(q,10),a(te,10),a(M,10),a(ae,8),a(re,8))},e.\u0275dir=u({type:e,selectors:[["","formControl",""]],inputs:{form:["formControl","form"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[f([Ct]),d,E]});let i=e;return i})(),Dt={provide:b,useExisting:h(()=>bt)},bt=(()=>{let e=class e extends b{constructor(t,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new C,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&($(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let r=this.form.get(t.path);return Q(r,t,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){H(t.control||null,t,!1),gt(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this.submitted=!0,pt(this.form,this.directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{let r=t.control,s=this.form.get(t.path);r!==s&&(H(r||null,t),mt(s)&&(Q(s,t,this.callSetDisabledState),t.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let r=this.form.get(t.path);ct(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let r=this.form.get(t.path);r&&ht(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){oe(this.form,this),this._oldForm&&$(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(a(q,10),a(te,10),a(re,8))},e.\u0275dir=u({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&V("submit",function(l){return s.onSubmit(l)})("reset",function(){return s.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[f([Dt]),d,E]});let i=e;return i})();var At={provide:v,useExisting:h(()=>Mt)},Mt=(()=>{let e=class e extends v{set isDisabled(t){}constructor(t,r,s,o,l){super(),this._ngModelWarningConfig=l,this._added=!1,this.name=null,this.update=new C,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=Re(this,o)}ngOnChanges(t){this._added||this._setUpControl(),Ue(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return ot(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(a(b,13),a(q,10),a(te,10),a(M,10),a(ae,8))},e.\u0275dir=u({type:e,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[f([At]),d,E]});let i=e;return i})(),Et={provide:M,useExisting:h(()=>Le),multi:!0};function He(i,e){return i==null?`${e}`:(e&&typeof e=="object"&&(e="Object"),`${i}: ${e}`.slice(0,50))}function Ft(i){return i.split(":")[0]}var Le=(()=>{let e=class e extends W{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;let r=this._getOptionId(t),s=He(r,t);this.setProperty("value",s)}registerOnChange(t){this.onChange=r=>{this.value=this._getOptionValue(r),t(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(let r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r),t))return r;return null}_getOptionValue(t){let r=Ft(t);return this._optionMap.has(r)?this._optionMap.get(r):t}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=_(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(r,s){r&1&&V("change",function(l){return s.onChange(l.target.value)})("blur",function(){return s.onTouched()})},inputs:{compareWith:"compareWith"},features:[f([Et]),d]});let i=e;return i})(),ai=(()=>{let e=class e{constructor(t,r,s){this._element=t,this._renderer=r,this._select=s,this._select&&(this.id=this._select._registerOption())}set ngValue(t){this._select!=null&&(this._select._optionMap.set(this.id,t),this._setElementValue(He(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._setElementValue(t),this._select&&this._select.writeValue(this._select.value)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};e.\u0275fac=function(r){return new(r||e)(a(F),a(w),a(Le,9))},e.\u0275dir=u({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let i=e;return i})(),wt={provide:M,useExisting:h(()=>$e),multi:!0};function Ce(i,e){return i==null?`${e}`:(typeof e=="string"&&(e=`'${e}'`),e&&typeof e=="object"&&(e="Object"),`${i}: ${e}`.slice(0,50))}function It(i){return i.split(":")[0]}var $e=(()=>{let e=class e extends W{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;let r;if(Array.isArray(t)){let s=t.map(o=>this._getOptionId(o));r=(o,l)=>{o._setSelected(s.indexOf(l.toString())>-1)}}else r=(s,o)=>{s._setSelected(!1)};this._optionMap.forEach(r)}registerOnChange(t){this.onChange=r=>{let s=[],o=r.selectedOptions;if(o!==void 0){let l=o;for(let g=0;g<l.length;g++){let O=l[g],Z=this._getOptionValue(O.value);s.push(Z)}}else{let l=r.options;for(let g=0;g<l.length;g++){let O=l[g];if(O.selected){let Z=this._getOptionValue(O.value);s.push(Z)}}}this.value=s,t(s)}}_registerOption(t){let r=(this._idCounter++).toString();return this._optionMap.set(r,t),r}_getOptionId(t){for(let r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r)._value,t))return r;return null}_getOptionValue(t){let r=It(t);return this._optionMap.has(r)?this._optionMap.get(r)._value:t}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=_(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(r,s){r&1&&V("change",function(l){return s.onChange(l.target)})("blur",function(){return s.onTouched()})},inputs:{compareWith:"compareWith"},features:[f([wt]),d]});let i=e;return i})(),li=(()=>{let e=class e{constructor(t,r,s){this._element=t,this._renderer=r,this._select=s,this._select&&(this.id=this._select._registerOption(this))}set ngValue(t){this._select!=null&&(this._value=t,this._setElementValue(Ce(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._select?(this._value=t,this._setElementValue(Ce(this.id,t)),this._select.writeValue(this._select.value)):this._setElementValue(t)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}_setSelected(t){this._renderer.setProperty(this._element.nativeElement,"selected",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};e.\u0275fac=function(r){return new(r||e)(a(F),a(w),a($e,9))},e.\u0275dir=u({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let i=e;return i})();function St(i){return typeof i=="number"?i:parseFloat(i)}var Ot=(()=>{let e=class e{constructor(){this._validator=j}ngOnChanges(t){if(this.inputName in t){let r=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):j,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=u({type:e,features:[E]});let i=e;return i})();var Nt={provide:q,useExisting:h(()=>Pt),multi:!0},Pt=(()=>{let e=class e extends Ot{constructor(){super(...arguments),this.inputName="min",this.normalizeInput=t=>St(t),this.createValidator=t=>Me(t)}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=_(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(r,s){r&2&&he("min",s._enabled?s.min:null)},inputs:{min:"min"},features:[f([Nt]),d]});let i=e;return i})();var xt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=x({type:e}),e.\u0275inj=P({imports:[_t]});let i=e;return i})(),ee=class extends A{constructor(e,n,t){super(ie(n),ne(t,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,t={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(e,n={}){let t=this._adjustIndex(e);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,t={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){Te(this,!1,e),e.forEach((t,r)=>{je(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((t,r)=>{t.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,t)=>t._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,t)=>{e(n,t)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function Ve(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var ui=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let t=new e;return t.useNonNullable=!0,t}group(t,r=null){let s=this._reduceControls(t),o={};return Ve(r)?o=r:r!==null&&(o.validators=r.validator,o.asyncValidators=r.asyncValidator),new R(s,o)}record(t,r=null){let s=this._reduceControls(t);return new J(s,r)}control(t,r,s){let o={};return this.useNonNullable?(Ve(r)?o=r:(o.validators=r,o.asyncValidators=s),new G(t,m(c({},o),{nonNullable:!0}))):new G(t,r,s)}array(t,r,s){let o=t.map(l=>this._createControl(l));return new ee(o,r,s)}_reduceControls(t){let r={};return Object.keys(t).forEach(s=>{r[s]=this._createControl(t[s])}),r}_createControl(t){if(t instanceof G)return t;if(t instanceof A)return t;if(Array.isArray(t)){let r=t[0],s=t.length>1?t[1]:null,o=t.length>2?t[2]:null;return this.control(r,s,o)}else return this.control(t)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ce({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var di=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:ae,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:re,useValue:t.callSetDisabledState??se}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=x({type:e}),e.\u0275inj=P({imports:[xt]});let i=e;return i})();export{be as a,pe as b,ni as c,ri as d,G as e,oi as f,vt as g,Vt as h,bt as i,Mt as j,Le as k,ai as l,li as m,Pt as n,ui as o,di as p};